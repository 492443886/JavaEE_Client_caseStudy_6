package com.info5059.casestudy.vendor;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
//@CrossOrigin
public class VendorController {
    @Autowired
    private VendorRepository vendorRepository;

    @GetMapping("/vendors")
    public ResponseEntity<List<Vendor>> findAll() {
        List<Vendor> employees = vendorRepository.findAll();
        return new ResponseEntity<List<Vendor>>(employees, HttpStatus.OK);
    }

    @PutMapping("/vendors")
    public ResponseEntity<Vendor> updateOne(@RequestBody Vendor employee) {
        Vendor updatedEmployee = vendorRepository.saveAndFlush(employee);
        return new ResponseEntity<Vendor>(updatedEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/vendors/{id}")
    public ResponseEntity<Integer> deleteOne(@PathVariable long id) {
        return new ResponseEntity<Integer>(vendorRepository.deleteOne(id), HttpStatus.OK);
    }
    @PostMapping("/vendors")
    public ResponseEntity<Vendor> addOne(@RequestBody Vendor employee) {
        Vendor newEmployee = vendorRepository.saveAndFlush(employee);
        return new ResponseEntity<Vendor>(newEmployee, HttpStatus.OK);
    }


}