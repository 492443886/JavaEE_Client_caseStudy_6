package com.info5059.casestudy.product;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.info5059.casestudy.vendor.Vendor;
import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Blob;
/**
 * ExpenseDTO – transfer container for Expense
 */
public class ProductDTO {
    private String id;
    private int vendor;
    @Basic(optional = true)


    private String name;
    private BigDecimal costprice;
    private BigDecimal msrp;
    private int rop;
    private int eoq;
    private int qoh;
    private int qoo;
    private String qrcode;
    private String qrcodetxt;
    public ProductDTO() {
    }
    public String getId() {
        return this.id;
    }
    public void setId(String inValue) {
        this.id = inValue;
    }
    public int getVendor() {
        return vendor;
    }
    public void setVendor(int inValue) {
        vendor = inValue;
    }


    public String getName() {
        return name;
    }
    public void setName(String inValue) {
        name = inValue;
    }
    public BigDecimal getCostprice() {
        return costprice;
    }
    public void setCostprice(BigDecimal inValue) {
        costprice = inValue;
    }
    public BigDecimal getMsrp() {
        return msrp;
    }
    public void setMsrp(BigDecimal inValue) {
        msrp = inValue;
    }
    public int getRop() {
        return rop;
    }
    public void setRop(int inValue) {
        rop = inValue;
    }
    public int getEop() {
        return eoq;
    }
    public void setEop(int inValue) {
        eoq = inValue;
    }
    public int getQoh() { return qoh; }
    public void setQoh(int inValue) {
        qoh = inValue;
    }
    public int getQoo() { return qoo; }
    public void setQoo(int inValue) {
        qoo = inValue;
    }
    public String getQrcode() {
        return qrcode;
    }
    public void setQrcode(String inValue) {
        qrcode = inValue;
    }
    public String getQrcodetxt() {
        return qrcodetxt;
    }
    public void setQrcodetxt(String inValue) {
        qrcodetxt = inValue;
    }

}