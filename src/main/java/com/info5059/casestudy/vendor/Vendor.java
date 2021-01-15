package com.info5059.casestudy.vendor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    public Vendor() {
    }
    private String name;
    private String address1;
    private String city;
    private String province;
    private String postalcode;
    private String phone;
    private String type;
    private String email;
    public long getId() {
        return this.id;
    }
    public void setId(long inValue) {
        this.id = inValue;
    }
    public String getName() {
        return this.name;
    }
    public void setName(String inValue) {
        this.name = inValue;
    }
    public String getAddress1() {
        return this.address1;
    }
    public void setAddress1(String inValue) {
        this.address1 = inValue;
    }
    public String getCity() {
        return this.city;
    }
    public void setCity(String inValue) {
        this.city = inValue;
    }
    public String getProvince() {
        return this.province;
    }
    public void setProvince(String inValue) {
        this.province = inValue;
    }
    public String getPostalcode() {
        return this.postalcode;
    }
    public void setPostalcode(String inValue) {
        this.postalcode = inValue;
    }
    public String getPhone() {
        return this.phone;
    }
    public void setPhone(String inValue) {
        this.phone = inValue;
    }
    public String getType() {
        return this.type;
    }
    public void setType(String inValue) {
        this.type = inValue;
    }
    public String getEmail() {
        return this.email;
    }
    public void setEmail(String inValue) {
        this.email = inValue;
    }
}


