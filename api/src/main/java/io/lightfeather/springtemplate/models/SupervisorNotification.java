package io.lightfeather.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SupervisorNotification {
  private String email;
  private String phone;
  private String jurisdiction;
  private String firstName;
  private String lastName;
 
  public SupervisorNotification() {

  }
  
  public SupervisorNotification(String email, String phone, String jurisdiction, String firstName, String lastName) {
    this.email = email;
    this.phone = phone;
    this.jurisdiction = jurisdiction;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }
  public void getEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }
  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getJurisdiction() {
    return jurisdiction;
  }
  public void setJurisdiction(String jurisdiction) {
    this.jurisdiction = jurisdiction;
  }

  public String getFirstName() {
    return firstName;
  }
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
}
