package com.info5059.casestudy.PurchaseOrder;
import com.info5059.casestudy.vendor.Vendor;
import com.info5059.casestudy.vendor.VendorRepository;
import com.info5059.casestudy.product.Product;
import com.info5059.casestudy.product.ProductRepository;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.*;
import java.math.BigDecimal;
import java.net.URL;
import java.text.NumberFormat;
import java.util.Date;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.web.servlet.view.document.AbstractPdfView;
/**
 * ExamplePDFGenerator - a class for testing how to create dynamic output in PDF
 * format using the iText 5 library
 *
 * @author Evan
 */
public abstract class POPDFGenerator extends AbstractPdfView {
    public static ByteArrayInputStream generateReport(String repid,
                                                      PurchaseOrderDAO repDAO,
                                                      VendorRepository employeeRepository,
                                                      ProductRepository expenseRepository) {
        URL imageUrl = com.info5059.casestudy.PurchaseOrder.POPDFGenerator.class.getResource("/public/images/logo.png");
        Document document = new Document();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        Font catFont = new Font(Font.FontFamily.HELVETICA, 24, Font.BOLD);
        Font subFont = new Font(Font.FontFamily.HELVETICA, 16, Font.BOLD);
        Font smallBold = new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD);
        Locale locale = new Locale("en", "US");
        NumberFormat formatter = NumberFormat.getCurrencyInstance(locale);
        try {
            PurchaseOrder report = repDAO.findOne(Long.parseLong(repid));
            PdfWriter.getInstance(document, baos);
            document.open();
            Paragraph preface = new Paragraph();
// add the logo here
            Image image1 = Image.getInstance(imageUrl);
            image1.setAbsolutePosition(55f, 750f);
            preface.add(image1);
            preface.setAlignment(Element.ALIGN_RIGHT);
// Lets write a big header
            Paragraph mainHead = new Paragraph(String.format("%55s", "Purchase Order"), catFont);
            preface.add(mainHead);
            preface.add(new Paragraph(String.format("%90s", "PO#:" + repid), subFont));
            addEmptyLine(preface, 3);
// add the employee info for the order here
            PdfPTable employeeTable = new PdfPTable(2);
            employeeTable.setWidthPercentage(35);
            employeeTable.setHorizontalAlignment(Element.ALIGN_LEFT);
            Vendor employee = employeeRepository.getOne(report.getVendor().getId());
            PdfPCell c1 = new PdfPCell(new Paragraph("Vendor:", smallBold));
            c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(employee.getName()));
            c1.setBackgroundColor(BaseColor.LIGHT_GRAY);
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(""));
            c1.setBorder(0);
            employeeTable.addCell(c1);


            c1 = new PdfPCell(new Phrase(employee.getAddress1()));
            c1.setBackgroundColor(BaseColor.LIGHT_GRAY);
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(""));
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(employee.getProvince()));
            c1.setBackgroundColor(BaseColor.LIGHT_GRAY);
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(""));
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(employee.getCity()));
            c1.setBackgroundColor(BaseColor.LIGHT_GRAY);
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(""));
            c1.setBorder(0);
            employeeTable.addCell(c1);

            c1 = new PdfPCell(new Phrase(employee.getPostalcode()));
            c1.setBackgroundColor(BaseColor.LIGHT_GRAY);
            c1.setBorder(0);
            employeeTable.addCell(c1);


//            c1 = new PdfPCell(new Phrase(""));
//            c1.setBorder(0);
//            employeeTable.addCell(c1);
//
//            c1 = new PdfPCell(new Phrase(employee.getEmail()));
//            c1.setBackgroundColor(BaseColor.LIGHT_GRAY);
//            c1.setBorder(0);
//            employeeTable.addCell(c1);


            preface.add(employeeTable);
            addEmptyLine(preface, 1);
// set up the order details in a table
            PdfPTable table = new PdfPTable(5);
            c1 = new PdfPCell(new Phrase("Product Code"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase("Product Description"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase("Quantity Sold"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            table.setHeaderRows(1);
            c1 = new PdfPCell(new Phrase("Price"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase("Exit Price"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            table.setHeaderRows(1);
            table.setHeaderRows(1);
            double tot = 0.0;
// dump out the line items
            for (PurchaseOrderLineitem line : report.getItems()) {
                Product expense = expenseRepository.getOne(line.getProduct().getId());
                c1 = new PdfPCell(new Phrase((expense.getId())));
                c1.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(c1);
                c1 = new PdfPCell(new Phrase(expense.getName()));
                c1.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(c1);
                c1 = new PdfPCell(new Phrase(line.getQty() + ""));
                c1.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(c1);
                c1 = new PdfPCell(new Phrase(formatter.format(line.getPrice())));
                c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
                table.addCell(c1);


                BigDecimal tem = new BigDecimal(line.getQty()) ;
                c1 = new PdfPCell(new Phrase(formatter.format(line.getPrice().multiply(tem))));
                c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
                table.addCell(c1);

            }
            tot = report.getAmount().doubleValue();
// report total
            //line one
            c1 = new PdfPCell(new Phrase(""));
            c1.setBorder(0);
            c1.setColspan(3);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase("Total:"));
            c1.setBorder(0);
            c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase(formatter.format(tot)));
            c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            c1.setBackgroundColor(BaseColor.YELLOW);
            table.addCell(c1);


            //line 2

            c1 = new PdfPCell(new Phrase(""));
            c1.setBorder(0);
            c1.setColspan(3);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase("Tax:"));
            c1.setBorder(0);
            c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase(formatter.format(tot* 0.13)));
            c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            c1.setBackgroundColor(BaseColor.YELLOW);
            table.addCell(c1);



            //line 3

            c1 = new PdfPCell(new Phrase(""));
            c1.setBorder(0);
            c1.setColspan(3);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase("Order Total:"));
            c1.setBorder(0);
            c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(c1);
            c1 = new PdfPCell(new Phrase(formatter.format(tot * 1.13)));
            c1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            c1.setBackgroundColor(BaseColor.YELLOW);
            table.addCell(c1);




///add
            preface.add(table);
            addEmptyLine(preface, 3);
// footer for date
            preface.setAlignment(Element.ALIGN_CENTER);

            Date date = report.getPodate();
            String tem = (date+"").substring(0,10);

            preface.add(new Paragraph(String.format("%85s", "PO Generated on: " + tem, //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
                    smallBold)));
            document.add(preface);
            document.close();
        } catch (Exception ex) {
            Logger.getLogger(POPDFGenerator.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ByteArrayInputStream(baos.toByteArray());
    }
    private static void addEmptyLine(Paragraph paragraph, int number) {
        for (int i = 0; i < number; i++) {
            paragraph.add(new Paragraph(" "));
        }
    }
}