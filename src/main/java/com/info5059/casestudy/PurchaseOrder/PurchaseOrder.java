package com.info5059.casestudy.PurchaseOrder;
import com.fasterxml.jackson.annotation.*;
import com.info5059.casestudy.vendor.Vendor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.ArrayList;

import java.util.List;
@Entity
public class PurchaseOrder {
    @Id
    @GeneratedValue
    private Long id;
    // FK
    @OneToOne
    @JoinColumn(name = "vendorid")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Vendor vendor;
    private BigDecimal amount;
    private Date podate;

    @OneToMany(
            mappedBy = "purchaseorder",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<PurchaseOrderLineitem> items = new ArrayList<PurchaseOrderLineitem>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Date getPodate() {
        return podate;
    }

    public void setPodate(Date podate) {
        this.podate = podate;
    }

    public List<PurchaseOrderLineitem> getItems() {
        return items;
    }

    public void setItems(List<PurchaseOrderLineitem> items) {
        this.items = items;
    }

    public void addItem(PurchaseOrderLineitem item) {
        items.add(item);
        item.setPurchaseorder(this);
    }


}
