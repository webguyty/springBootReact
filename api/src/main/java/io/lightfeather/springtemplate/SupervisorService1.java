// package io.lightfeather.springtemplate;
// import io.lightfeather.springtemplate.models.Supervisor;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.client.RestTemplate;
// import org.springframework.http.ResponseEntity;
// import org.springframework.http.HttpStatus;
// import java.util.ArrayList;
// import java.util.List;




// // @Service
// @RestController
// @RequestMapping(path = "/supervisors")
// public class SupervisorService1 {
//   @GetMapping
//   public ResponseEntity<?> getSupervisors() {
//     RestTemplate restTemplate = new RestTemplate();

//     ResponseEntity<Supervisor[]> response = restTemplate.getForEntity(
//       "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers",
//       Supervisor[].class);
//     Supervisor[] supervisors = response.getBody();

//     return new ResponseEntity<>(supervisors, HttpStatus.OK);
//   }
// }
