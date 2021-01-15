package com.info5059.casestudy.PurchaseOrder;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;


public class PurchaseOrderDTO  implements Serializable {
    private int id;
    private Long vendorid;

    private BigDecimal total;
    private String podate;
    private ArrayList<PurchaseOrderLineitemDTO> items;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Long getVendorid() {
        return vendorid;
    }

    public void setVendorid(Long vendorid) {
        this.vendorid = vendorid;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public String getPodate() {
        return podate;
    }

    public void setPodate(String podate) {
        this.podate = podate;
    }

    public ArrayList<PurchaseOrderLineitemDTO> getItems() {
        return items;
    }

    public void setItems(ArrayList<PurchaseOrderLineitemDTO> items) {
        this.items = items;
    }
}
