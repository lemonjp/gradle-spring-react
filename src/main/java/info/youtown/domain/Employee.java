package info.youtown;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Employee {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String description;

    private Employee() {}

    public Employee(String firstName, String lastName, String description){
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }
}
