package com.info5059.casestudy.PurchaseOrder;
import com.info5059.casestudy.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {

    @Query("select r from PurchaseOrder r where r.vendor.id = ?1")
    List<PurchaseOrder> findByVendor(Long vendorid);
}