1. �������̺��� ���� ���� ����ũ�� �̸����� ���� ������.
SELECT DISTINCT Customers.CustomerName FROM Customers 
INNER JOIN Orders ON Orders.CustomerID = Customers.CustomerID

2. ���� ���̺��� 5�� �̻� ������ ���� �̸��� ������ Ƚ���� ���� ������.
SELECT Customers.CustomerName, count(*) as count FROM Customers
INNER JOIN Orders ON Orders.CustomerID = Customers.CustomerID
group by(Customers.CustomerName)
Having count(*) > 5
order by count(*) desc

3. ���� ���̺��� ���� ���� �Ǹŵ� 5���� ��ǰ�� �̸��� Ƚ���� ���� ������.
SELECT Products.ProductName, count(OrderDetails.Quantity) as �Ǹ�Ƚ��, sum(OrderDetails.Quantity) as �Ǹż���
FROM OrderDetails
INNER JOIN Products ON Products.ProductID = OrderDetails.ProductID
group by(OrderDetails.ProductID)
Order by �Ǹż��� desc
LIMIT 5

4. ��۱��(Shippers)�� ����� �ֹ� �ǰ� ��ǰ ������ ���� ������.
SELECT Shippers.ShipperName, count(Orders.OrderID) as OrdersCount, sum(OrderDetails.Quantity) as ProductsCount
FROM OrderDetails
INNTER JOIN Orders ON Orders.OrderID = OrderDetails.OrderID
INNER JOIN Shippers ON Shippers.ShipperID = Orders.ShipperID
group by(Orders.ShipperID)

5. ���� ���� �Ǹŵ� ��ǰ�� �̸��� ���� ������.
SELECT Products.ProductName, SUM(OrderDetails.Quantity) as �Ǹż���
FROM OrderDetails
INNER JOIN Products ON Products.ProductID = OrderDetails.ProductID
group by(OrderDetails.ProductID)
Order by �Ǹż��� desc
LIMIT 1