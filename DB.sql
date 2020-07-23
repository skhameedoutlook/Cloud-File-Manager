CREATE TABLE usertable (
    uid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    PASSWORD varchar(255)
);

Insert Into usertable(email, password) values('test_account', 'test_account');