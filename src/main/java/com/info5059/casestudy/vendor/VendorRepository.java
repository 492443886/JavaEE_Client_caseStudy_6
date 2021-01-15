package com.info5059.casestudy.vendor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
    // will return the number of rows deleted
    @Modifying
    @Transactional
    @Query("delete from Vendor where id = ?1")
    int deleteOne(Long vendorid);
}