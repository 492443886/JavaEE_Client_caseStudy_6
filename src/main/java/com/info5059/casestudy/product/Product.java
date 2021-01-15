package com.info5059.casestudy.product;
import com.fasterxml.jackson.annotation.*;
import com.info5059.casestudy.vendor.Vendor;
import javax.persistence.*;
import java.math.BigDecimal;
/**
 * Expense entity
 */
@Entity
public class Product {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    // FK
    @ManyToOne
    @JoinColumn(name = "vendorid", updatable = true)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Vendor vendor;
    @Basic(optional = true)
    @Lob

    private String name;

    private BigDecimal costprice;
    private BigDecimal msrp;
    private int rop;
    private int eoq;
    private int qoh;
    private int qoo;
    @Lob
    private byte[] qrcode;
    private String qrcodetxt;



    public Product() {
    }
    public String getId() {
        return this.id;
    }
    public void setId(String inValue) {
        this.id = inValue;
    }
    public Vendor getVendor() {
        return vendor;
    }
    public void setVendor(Vendor inValue) {

        vendor = inValue;
    }
//    public String getDescription() {
//        return this.description;
//    }
//    public void setDescription(String inValue) {
//        this.description = inValue;
//    }
//    public String getCategoryid() {
//        return categoryid;
//    }
//    public void setCategoryid(String inValue) {
//        categoryid = inValue;
//    }
//    public boolean getReceipt() {
//        return receipt;
//    }
//    public void setReceipt(boolean inValue) {
//        receipt = inValue;
//    }
//    public byte[] getReceiptscan() {
//        return receiptscan;
//    }
//    public void setReceiptscan(byte[] inValue) {
//        receiptscan = inValue;
//    }
//    public BigDecimal getAmount() {
//        return amount;
//    }
//    public void setAmount(BigDecimal inValue) {
//        amount = inValue;
//    }
//    public String getDateincurred() {
//        return dateincurred;
//    }
//    public void setDateincurred(String inValue) {
//        dateincurred = inValue;
//    }

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

    public byte[] getQrcode() {
        return qrcode;
    }
    public void setQrcode(byte[] inValue) {
        qrcode = inValue;
    }

    public String getQrcodetxt() {
        return qrcodetxt;
    }
    public void setQrcodetxt(String inValue) {
        qrcodetxt = inValue;
    }

}