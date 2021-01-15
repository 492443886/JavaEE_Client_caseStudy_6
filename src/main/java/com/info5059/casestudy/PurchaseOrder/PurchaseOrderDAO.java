package com.info5059.casestudy.PurchaseOrder;

import com.info5059.casestudy.vendor.Vendor;
import com.info5059.casestudy.product.Product;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import java.util.Date;

@Component
public class PurchaseOrderDAO {

    @PersistenceContext
    private EntityManager em;
    @Transactional
    public Long addOne(PurchaseOrderDTO dto) {
        PurchaseOrder purchaseOrder = new PurchaseOrder();

        purchaseOrder.setAmount(dto.getTotal());
        purchaseOrder.setPodate(new Date());
        Vendor vendor = em.find(Vendor.class, dto.getVendorid());
        purchaseOrder.setVendor(vendor);
        for ( PurchaseOrderLineitemDTO item : dto.getItems()) {



            PurchaseOrderLineitem line = new PurchaseOrderLineitem();
            line.setPrice(item.getPrice());
            line.setQty(item.getQty());
            line.setPurchaseorder(purchaseOrder);
            Product product = em.find(Product.class, item.getProductid());
            line.setProduct(product);
            purchaseOrder.addItem(line);
            // test trans by uncommenting the line below
            // throw new EntityNotFoundException("Can't find report for ID ");
        }
        em.persist(purchaseOrder);
        return purchaseOrder.getId();
    }
    public PurchaseOrder findOne(Long id) {
        PurchaseOrder purchaseOrder = em.find(PurchaseOrder.class, id);
        if (purchaseOrder == null) {
            throw new EntityNotFoundException("Can't find report for ID "
                    + id);
        }
        return purchaseOrder;
    }
}
