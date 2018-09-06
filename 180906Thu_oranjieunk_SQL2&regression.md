<SQLlite의 SQL문>
select d.department_id, department, product_name
from products p
	inner join departments d
	on p.department_id = d.department_id
where product_name LIKE '%Banana%'
	AND department = 'snacks'
LIMIT 1

변수 1개이니 단순, 예측을 하므로 회귀 => 단순회귀
Logistic 회귀 : 바이너리 데이터 변수들에 로그를 씌워서 확률을 계산한!
회귀분석에서 절편은 별로 안 중요함. X가 0인 경우가 대부분이므로 형식상 해석에 중요하진 않음.
Yi햇은 추정량. 잔차 제곱합을 최소로 하는 Y햇을 찾음. 이상하면 모델을 적합시켜보고 바꿔봐야 함.