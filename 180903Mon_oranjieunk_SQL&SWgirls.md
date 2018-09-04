1. 구매테이블에서 구매 고객의 유니크한 이름만을 구해 보세요.
SELECT DISTINCT Customers.CustomerName FROM Customers 
INNER JOIN Orders ON Orders.CustomerID = Customers.CustomerID

2. 구매 테이블에서 5번 이상 구매한 고객의 이름과 구매한 횟수를 구해 보세요.
SELECT Customers.CustomerName, count(*) as count FROM Customers
INNER JOIN Orders ON Orders.CustomerID = Customers.CustomerID
group by(Customers.CustomerName)
Having count(*) > 5
order by count(*) desc

3. 구매 테이블에서 가장 많이 판매된 5개의 상품의 이름과 횟수를 구해 보세요.
SELECT Products.ProductName, count(OrderDetails.Quantity) as 판매횟수, sum(OrderDetails.Quantity) as 판매수량
FROM OrderDetails
INNER JOIN Products ON Products.ProductID = OrderDetails.ProductID
group by(OrderDetails.ProductID)
Order by 판매수량 desc
LIMIT 5

4. 배송기사(Shippers)가 배송한 주문 건과 상품 갯수를 구해 보세요.
SELECT Shippers.ShipperName, count(Orders.OrderID) as OrdersCount, sum(OrderDetails.Quantity) as ProductsCount
FROM OrderDetails
INNTER JOIN Orders ON Orders.OrderID = OrderDetails.OrderID
INNER JOIN Shippers ON Shippers.ShipperID = Orders.ShipperID
group by(Orders.ShipperID)

5. 가장 많이 판매된 상품의 이름을 구해 보세요.
SELECT Products.ProductName, SUM(OrderDetails.Quantity) as 판매수량
FROM OrderDetails
INNER JOIN Products ON Products.ProductID = OrderDetails.ProductID
group by(OrderDetails.ProductID)
Order by 판매수량 desc
LIMIT 1

# 빅데이터 SW girls 
