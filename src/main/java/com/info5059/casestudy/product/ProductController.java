package com.info5059.casestudy.product;
import java.util.List;
import java.util.Optional;
import com.info5059.casestudy.vendor.Vendor;
import com.info5059.casestudy.vendor.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//@CrossOrigin
@RestController
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private VendorRepository vendorRepository;
    @GetMapping("/Product")
    public ResponseEntity<List<Product>> findAll() {
        List<Product> expenses = productRepository.findAll();
        return new ResponseEntity<List<Product>>(expenses, HttpStatus.OK);
    }
    @GetMapping("/Product/{id}")
    public Product findOne(@PathVariable String id) {
        return productRepository.getOne(id);
    }
    @PutMapping("/Product")
    public ResponseEntity<Product> updateOne(@RequestBody ProductDTO dto) {
        //
        //Product updateExpense = productRepository.findById(dto.getId()).get();
        Product updateProduct = new Product();
        updateProduct = copyDTOToEntity(dto, updateProduct);
        return new ResponseEntity<Product>(updateProduct, HttpStatus.OK);
    }
    @DeleteMapping("/Product/{id}")
    public ResponseEntity<Integer> deleteOne(@PathVariable String id) {
        return new ResponseEntity<Integer>(productRepository.deleteOne(id), HttpStatus.OK);
    }
    @PostMapping("/Product")
    public ResponseEntity<Product> addOne(@RequestBody ProductDTO dto) {
        Product newExpense = new Product();
        newExpense = copyDTOToEntity(dto, newExpense);
        return new ResponseEntity<Product>(newExpense, HttpStatus.OK);
    }
    private Product copyDTOToEntity(ProductDTO dto, Product original) {
        Optional<Vendor> vendor = vendorRepository.findById(Long.valueOf(dto.getVendor()));
        if (!vendor.isPresent())
            throw new ExpenseNotFoundException(dto.getVendor() + " not found");

        original.setId(dto.getId());
        original.setVendor(vendor.get());

        original.setName(dto.getName());
        original.setCostprice(dto.getCostprice());
        original.setMsrp(dto.getMsrp());
        original.setEop(dto.getEop());
        original.setQoh(dto.getQoh());
        original.setRop(dto.getRop());
        original.setQoo(dto.getQoo());
        original.setQrcodetxt(dto.getQrcodetxt());
        QRCodeGenerator generator = new QRCodeGenerator();
        original.setQrcode(generator.generateQRCode(dto.getQrcodetxt()));

        Product updatedExpense = productRepository.saveAndFlush(original);
        return updatedExpense;
    }

    @GetMapping("/qrcode/{txt}")
    public ResponseEntity<byte[]> getQRCode(@PathVariable String txt) {
        QRCodeGenerator generator = new QRCodeGenerator();
        byte[] qrcodebin = generator.generateQRCode(txt);
        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG);
        return new ResponseEntity<byte[]>(qrcodebin, headers, HttpStatus.CREATED);
    }

    @GetMapping(value = "/pagedexpenses", params = {"p", "s"})
    public Page<Product> findPaginated(@RequestParam("p") int page, @RequestParam("s") int size)
    {
        Page<Product> resultPage = productRepository.findAll(PageRequest.of(page, size));
        if (page > resultPage.getTotalPages()) {
            throw new ExpenseNotFoundException("");
        }
        return resultPage;
    }

}