package io.lightfeather.springtemplate;
import io.lightfeather.springtemplate.models.Supervisor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping(path = "/api")
public class SupervisorService {
  // Get all supervisors
  @GetMapping
  @CrossOrigin(origins = "http://localhost:3000")
  public ResponseEntity<?> getSupervisors() {
    RestTemplate restTemplate = new RestTemplate();

    ResponseEntity<Supervisor[]> response = restTemplate.getForEntity(
      "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers",
      Supervisor[].class);
    Supervisor[] supervisors = response.getBody();

    return new ResponseEntity<>(supervisors, HttpStatus.OK);
  }

  // Filter and sort supervisors
  // Filter out numerical jurisdictions and sort by jurisdiction and name
  @RequestMapping(path = "/supervisors")
  @CrossOrigin(origins = "http://localhost:3000")
  public ResponseEntity<?> getSupervisorsSorted() {
    RestTemplate restTemplate = new RestTemplate();

    ResponseEntity<Supervisor[]> response = restTemplate.getForEntity(
      "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers",
      Supervisor[].class);
    
    // Supervisor arrays
    Supervisor[] supervisors = response.getBody();
    List<Supervisor> supervisorsFiltered = new ArrayList<>();
    List<String> supervisorsFormatted = new ArrayList<>();;

    // Filter out all jurisdictions that contain a number using REgex
    String pattern = "[0-9]";
    // Create a Pattern object
    Pattern r = Pattern.compile(pattern);
    
    for (Supervisor sup : supervisors) {
      Matcher m = r.matcher(sup.getJurisdiction());

      if(!m.find()) {
        supervisorsFiltered.add(sup);
      }
    }

    // Sort by Jurisdiction - then last name - then first name
    Collections.sort(supervisorsFiltered, new Comparator<Supervisor>() {
      @Override
      public int compare(Supervisor arg0, Supervisor arg1) {
        //Sorts by 'jurisdiction' property - if equal run secondary sort
        return arg0.getJurisdiction().compareTo(arg1.getJurisdiction()) != 0 ? 
          arg0.getJurisdiction().compareTo(arg1.getJurisdiction()) : 
          doSecodaryOrderSort(arg0,arg1);
      }

      //If 'jurisdiction' property is equal - sort by lastName - if equal run tertiary sort for firstName
      public int doSecodaryOrderSort(Supervisor arg0,Supervisor arg1) {
        return arg0.getLastName().compareTo(arg1.getLastName()) != 0 ? 
          arg0.getLastName().compareTo(arg1.getLastName()) : 
          doTertiaryOrderSort(arg0,arg1);
      }
      //If 'lastName' property is equal - sort by firstName - if equal run tertiary sort for firstName
      public int doTertiaryOrderSort(Supervisor arg0,Supervisor arg1) {
        return arg0.getFirstName().compareTo(arg1.getFirstName());
      }
    });

    // Format into a string for response
    for (Supervisor sup : supervisorsFiltered) {
      
      supervisorsFormatted.add(sup.getJurisdiction() + " - " + sup.getLastName() + ", " + sup.getFirstName());
    }

    return new ResponseEntity<>(supervisorsFormatted, HttpStatus.OK);
  }

  @RequestMapping(path = "/submit")
  @PostMapping
  @CrossOrigin(origins = "http://localhost:3000")
  public ResponseEntity<?> submitNotification() {
    System.out.println("hellow There");
    return new ResponseEntity<>("Okay", HttpStatus.OK);
  }
}
