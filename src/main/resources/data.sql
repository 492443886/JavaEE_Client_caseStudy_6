INSERT INTO Vendor (Address1,City,Province,PostalCode,Phone,Type,Name,Email)VALUES ('123 Maple St','London','On', 'N1N-1N1','(555)555-5555','Trusted','ABC Supply Co.','abc@supply.com');
INSERT INTO Vendor (Address1,City,Province,PostalCode,Phone,Type,Name,Email) VALUES ('543 Sycamore Ave','Toronto','On', 'N1P-1N1','(999)555-5555','Trusted','Big Bills Depot','bb@depot.com');
INSERT INTO Vendor (Address1,City,Province,PostalCode,Phone,Type,Name,Email) VALUES ('922 Oak St','London','On', 'N1N-1N1','(555)555-5599','Un Trusted','Shady Sams','ss@underthetable.com');
INSERT INTO Vendor (Address1,City,Province,PostalCode,Phone,Type,Name,Email) VALUES ('491 Oxford','Toronto','On', 'N2P-1N3','(999)555-5555','Trusted','Chunhui Ma','bb@depot.com');



INSERT INTO Product (id, name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('12X45', 'dog' ,1, 33, 1, 0, 1, 12, 35);
INSERT INTO Product (id,name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('14X45', 'cat' ,1, 33, 2, 1, 2, 31, 11);

INSERT INTO Product (id, name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('12W45', 'dog' ,2, 33, 1, 0, 1, 12, 88);
INSERT INTO Product (id,name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('14W45', 'cat' ,2, 33, 2, 1, 2, 31, 10);
INSERT INTO Product (id,name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('14S45', 'fish' ,2, 33, 2, 1, 2, 31, 21);

INSERT INTO Product (id, name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('12R45', 'dog' ,4, 33, 1, 0, 1, 12.3,12.2);
INSERT INTO Product (id,name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('14R45', 'cat' ,4, 33, 2, 1, 2, 31.2,32.3);
INSERT INTO Product (id,name, vendorid, rop, eoq, qoh, qoo, msrp, COSTPRICE)
VALUES ('14R35', 'fish' ,4, 33, 2, 1, 2, 20.5, 32);

-- INSERT INTO PURCHASE_ORDER VALUES(1, 2.3,  CURRENT_TIMESTAMP, 1 );
-- INSERT INTO  PURCHASE_ORDER_LINEITEM  VALUES(1, 1, 1, '12X45', 1 );