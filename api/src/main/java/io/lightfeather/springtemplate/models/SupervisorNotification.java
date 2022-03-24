package io.lightfeather.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SupervisorNotification {
  private String email;
  private String phoneNumber;
  private String supervisor;
  private String firstName;
  private String lastName;
 
  public SupervisorNotification() {

  }
  
  public SupervisorNotification(String email, String phoneNumber, String supervisor, String firstName, String lastName) {
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.supervisor = supervisor;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }
  public void getEmail(String email) {
    this.email = email;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }
  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public String getSupervisor() {
    return supervisor;
  }
  public void setSupervisor(String supervisor) {
    this.supervisor = supervisor;
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

  public String toString() {
    return "First Name: " + getFirstName() +
            "\nLastName: " + getLastName() +
            "\nPhone number: " + getPhoneNumber() +
            "\nEmail: " + getEmail() +
            "\nSupervisor: " + getSupervisor();
  }
}
