<SQLlite�� SQL��>
select d.department_id, department, product_name
from products p
	inner join departments d
	on p.department_id = d.department_id
where product_name LIKE '%Banana%'
	AND department = 'snacks'
LIMIT 1

���� 1���̴� �ܼ�, ������ �ϹǷ� ȸ�� => �ܼ�ȸ��
Logistic ȸ�� : ���̳ʸ� ������ �����鿡 �α׸� ������ Ȯ���� �����!
ȸ�ͺм����� ������ ���� �� �߿���. X�� 0�� ��찡 ��κ��̹Ƿ� ���Ļ� �ؼ��� �߿����� ����.
Yi���� ������. ���� �������� �ּҷ� �ϴ� Y���� ã��. �̻��ϸ� ���� ���ս��Ѻ��� �ٲ���� ��.