package com.info5059.casestudy.PurchaseOrder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//@CrossOrigin
@RestController
public class PurchaseOrderController {
    @Autowired
    private PurchaseOrderDAO purchaseOrderDAO;

    @Autowired
    private PurchaseOrderRepository purchaseOrderRepository;

    @PostMapping("/pos")
    public ResponseEntity<Long> addOne(@RequestBody PurchaseOrderDTO dto) { // use RequestBody for DTO
        Long reportId = purchaseOrderDAO.addOne(dto);
        return new ResponseEntity<Long>(reportId, HttpStatus.OK);
    }

    @GetMapping("/pos/{id}")
    public ResponseEntity<List<PurchaseOrderDTO>> findOne(@PathVariable Long id) {
        List<PurchaseOrder> reports = purchaseOrderRepository.findByVendor(id);
        ArrayList<PurchaseOrderDTO> reportsDTO = new ArrayList<PurchaseOrderDTO>();
        for (PurchaseOrder report : reports) {
            PurchaseOrderDTO repDTO = copyEntityToDTO(report);
            reportsDTO.add(repDTO);
        }
        return new ResponseEntity<List<PurchaseOrderDTO>>(reportsDTO, HttpStatus.OK);
    }
    private PurchaseOrderDTO copyEntityToDTO(PurchaseOrder original) {
        PurchaseOrderDTO dto = new PurchaseOrderDTO();

        dto.setPodate(original.getPodate().toString());
        dto.setVendorid(original.getVendor().getId());
        dto.setId(original.getId().intValue());
        ArrayList<PurchaseOrderLineitemDTO> dtoItems = new ArrayList<PurchaseOrderLineitemDTO>();
        for (PurchaseOrderLineitem item : original.getItems()) {
            PurchaseOrderLineitemDTO dtoItem = new PurchaseOrderLineitemDTO();
            dtoItem.setProductid(item.getProduct().getId());
            dtoItem.setId(item.getId());
            dtoItem.setPoid(item.getPurchaseorder().getId());
            dtoItem.setPrice(item.getPrice());
            dtoItem.setProductname(item.getProduct().getName());
            dtoItem.setQty(item.getQty());
            dtoItems.add(dtoItem);

        }
        dto.setTotal(original.getAmount());
        dto.setItems(dtoItems);
        return dto;
    }



}
