package com.info5059.casestudy.PurchaseOrder;


import com.info5059.casestudy.vendor.VendorRepository;
import com.info5059.casestudy.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import java.io.ByteArrayInputStream;
import java.io.IOException;
@RestController
public class POPDFController {
    @Autowired
    private PurchaseOrderDAO reportDAO;
    @Autowired
    private VendorRepository employeeRepository;
    @Autowired
    private ProductRepository expenseRepository;
    @RequestMapping(value = "/POPDF", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> streamPDF(HttpServletRequest request) throws IOException {
        String repid = request.getParameter("poid");
// get formatted pdf as a stream
        ByteArrayInputStream bis = POPDFGenerator.generateReport(repid,
                reportDAO,
                employeeRepository,
                expenseRepository);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=Report" + repid + ".pdf");
// dump stream to browser
        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }
}
