-- MySQL dump 10.13  Distrib 5.5.59, for Win64 (AMD64)
--
-- Host: localhost    Database: easybites
-- ------------------------------------------------------
-- Server version	5.5.59

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (3,'Indian Starter','Paneer Tikka',249),(5,'Italian','Pasta Alfredo',229),(7,'Italian','Wonder Veg Pizza',199),(8,'Italian','Pasta Arrabbiata',219),(9,'Italian','Ala Puttanesca (Red Spaghetti)',309),(10,'Italian','Pasta Basil Pesto',289),(11,'Italian','Pesto Spaghetti',329),(12,'Italian','Cheese Burst Pizza',199),(13,'Chinese','Hakka Noodles',229),(14,'Chinese','Manchurian Gravy',179),(15,'Chinese','Manchurian Dry',199),(16,'Chinese','Burnt Garlic Noodles',229),(17,'Chinese','Chilly Paneer',239),(18,'Chinese','Honey Chilli Potato',219),(19,'Chinese','Chinese Veg Saute',199),(20,'Chinese','Veg Fried Rice',159),(21,'Chinese','Chinese Platter (Manchurian+Fried Rice+ Hakka Noodles)',399),(22,'Chinese','Veg Lollipop(6 Pc)',169),(23,'Chinese','Manchow Soup',159),(24,'Chinese','Spring Rolls',189),(25,'Indian Starter','Hara Bhara Kebab',169),(26,'Indian Starter','Dahi Kebab',179),(27,'Indian Starter','Masala Papad',59),(28,'Indian Starter','Tomato Soup',109),(29,'Indian Starter','Sweet Corn Soup',129),(30,'Indian Starter','Spinach Soup',109),(31,'Indian Starter','Dahi Vada',129),(32,'Indian Starter','Paneer 65',209),(33,'Indian Starter','Tandoori Aaloo Tikka',199),(34,'South Indian','Steamed Idli (4 Pc)',139),(35,'South Indian','Medu Vada (2 Pc)',149),(36,'South Indian','Plain Dosa',129),(37,'South Indian','Masala Dosa',159),(38,'South Indian','Mysore Masala Dosa',179),(39,'South Indian','Paper Plain Dosa',169),(40,'South Indian','Rasam Rice Platter',219),(41,'South Indian','Vegetable Uttapam',149),(42,'South Indian','Veg Saute Idli',169),(43,'South Indian','Cheese Paneer Uttapam',169),(44,'South Indian','Vegetable Cheese Dosa',209),(45,'South Indian','Tandoori Paneer Dosa',229),(46,'North Indian','Dum Aaloo Punjabi',139),(47,'North Indian','Kaju Masala',149),(48,'North Indian','Paneer Tikka Masala',129),(49,'North Indian','Dum Aaloo Kashmiri',159),(50,'North Indian','Sev Tamatar',149),(51,'North Indian','Butter Paneer Masala',169),(52,'North Indian','Dal Makhani',139),(53,'North Indian','Dal Tadka',119),(54,'North Indian','Paneer Angara',169),(55,'North Indian','Malai Kofta (Sweet Gravy)',169),(56,'North Indian','Rajma Chawal Platter',229),(57,'North Indian','Veg Stir Fry Masala',199),(58,'North Indian','Methi Matar Malai',149),(59,'Bread','Tawa Roti',59),(60,'Bread','Plain Tandoori Roti',69),(61,'Bread','Butter Tandoori Roti',79),(62,'Bread','Kashmiri Naan',139),(63,'Bread','Butter Naan',79),(64,'Bread','Cheese Naan',99),(65,'Bread','Chilly Cheese Naan',109),(66,'Bread','Chilly Garlic Naan',109),(67,'Bread','Missi Roti',79),(68,'Bread','Aaloo Paratha',129),(69,'Dessert','Gulab Jamun (2 Pc)',99),(70,'Dessert','Rasgulla (2 Pc)',99),(71,'Dessert','Aamras',109),(72,'Dessert','Fruit Custard',109),(73,'Dessert','Fruit Raita',99),(74,'Dessert','Rasmalai (2 Pc)',89),(75,'Dessert','Choco Lava Cake',99),(76,'Dessert','Ice Cream with Brownie',139),(77,'Dessert','Chocolate Cheesecake',249),(78,'Fast Food','Veg Burger',99),(79,'Fast Food','Cheeseburger',129),(80,'Fast Food','French Fries Salted',109),(81,'Fast Food','French Fries Peri Peri',129),(82,'Fast Food','Pizza Puff',79),(83,'Fast Food','Cheese Sandwich',149),(84,'Fast Food','Potato Wedges',89),(85,'Beverage','Lemonade',89),(86,'Beverage','Coca Cola',89),(87,'Beverage','Lassi',99),(88,'Beverage','Buttermilk',79);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(512) DEFAULT NULL,
  `grand_total` int(11) NOT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `delivery_address` varchar(255) DEFAULT NULL,
  `delivery_man` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (4,'Pasta Arrabbiata',219,'Debit Card','Complete','john2405@gmail.com','23-A Avenue Building\nNear kids School','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','3496'),(5,'Paneer Tikka Masala',129,'Credit Card','Complete','john2405@gmail.com','23-C Avenue Building,\nIndore','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','1579'),(6,'Dal Tadka',119,'Cash On Delivery','Complete','john2405@gmail.com','23-A Avenue Building,\nIndore','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','5760'),(7,'Dal Tadka, Aamras',228,'Cash On Delivery','Complete','john2405@gmail.com','23-AAvenue Building, \nIndore','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','5997'),(8,'Manchurian Dry',199,'UPI','Complete','john2405@gmail.com','12-C Pishkin Building, New York','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','8249'),(9,'Manchurian Dry',199,'Cash On Delivery','Complete','john2405@gmail.com','abc streeett','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','6332'),(10,'Veg Burger, Hakka Noodles',328,'UPI','Complete','geetanshgandhi@gmail.com','Abc Street, Indore','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','9795'),(11,'Manchurian Dry',199,'Cash On Delivery','Out for Delivery','john2405@gmail.com','23-F Urban Heights, Indore',NULL,'3985'),(12,'Cheeseburger, French Fries Peri Peri',258,'Debit Card','Complete','john2405@gmail.com','Flat 201, North Avenue, Indore','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','2119'),(13,'Tandoori Paneer Dosa',229,'Credit Card','Preparing','john2405@gmail.com','23, Vijay Nagar, Indore',NULL,'3215'),(14,'Pasta Basil Pesto, Wonder Veg Pizza',488,'UPI','Complete','geetanshgandhi@gmail.com','25th Avenue, Indore','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Sanjay Kumar\",\"contact\":\"9859432914\"}','8457'),(15,'Pasta Basil Pesto, Pasta Alfredo',518,'UPI','Complete','geetansh@gmail.com','ABC street, Indore','{\"email\":\"deliveryperson1@easybites.in\",\"name\":\"Delivery Person 1\",\"contact\":\"9859432914\"}','4720');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin@easybites.in','MG Road, Indore','Admin','9479755613','Easy Bites Admin','Admin@123'),('deliveryperson1@easybites.in','Goregaon East, Mumbai','Delivery','9859432914','Delivery Person 1','Easy@124'),('geetansh@gmail.com','ABC street, Indore','User','1234567890','Geetansh Gandhi','Hola@1234'),('geetanshgandhi@gmail.com','Abc Street, Indore','User','1234567890','Geetansh Gandhi','Hello@123'),('john2405@gmail.com','Anand Baazar, Indore','User','9479756789','John Dave','Learn@48');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-23 15:18:26
