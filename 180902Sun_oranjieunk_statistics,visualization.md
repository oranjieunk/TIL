1) p-value�� ���� : �͹������� ���̶�� ������ �� �ش����� ��跮�� ������ ������ Ȯ��
���Ǽ����� �������� �ݹ��ϱⰡ ������. ���Ǽ����� ���ٴ� ���� �ξ� ��ٷӰ� �����ϰڴٴ� �ǹ�

2) �ð�ȭ
(ggplot(child)
+ aes(x='category', y='votes')
+ geom_col(fill='skyblue')
+ ggtitle('ī�װ��� ��ǥ��')
+ coord_flip() # x,y�� �ٲٱ�
+ theme(text=element_text(family='NanumBarunGothic'))
)

��Ʈ�� ����
geom_col(fill='skyblue')
geom_point()
geom_bar(fill='skyblue')
geom_boxplot()
geom_histogram(binwidth=10)

�������� �ɼ�
facet_wrap('~Survived') # �ش� ī�װ����� ����
stat_smooth()

����ġ ó��(Simple)
��� 1)
train['Age'] = train['Age'].dropna()
��� 2)
train['Survived'] = train['Survived'].astype('category')
train['Age'] = train['Age'].fillna(train['Age'].median())
train['Embarked'] = train['Embarked'].fillna(train['Embarked'].mode()[0])

3) ź�ڴϾ� ����ä�ù� ������Ʈ ��ó��