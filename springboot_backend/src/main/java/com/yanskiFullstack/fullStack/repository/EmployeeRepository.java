package com.yanskiFullstack.fullStack.repository;

import com.yanskiFullstack.fullStack.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
