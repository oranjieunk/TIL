%matplotlib inline : notebook�� ������ ���������� �ٷ� �׸��� �� �� �ְ� ���ִ� ����
python���� �����ϴ� rich output�� ���� ǥ�� ���

<�ʺ��ڸ� ���� Kaggle ��õ Competition>
    * �з� : https://www.kaggle.com/c/titanic
    * ȸ�� : https://www.kaggle.com/c/bike-sharing-demand
    * NLP : https://www.kaggle.com/c/word2vec-nlp-tutorial
����ũ�� word2vec�� �̹� �������� Ŀ���� �����ǰ� ������ ���� ����� �����Ƿ� ���� ������ȸ ������ ����
    * �ش� ������ȸ�� ���� �¶��� ���� :
        - https://programmers.co.kr/learn/courses/21
        - https://www.inflearn.com/course/nlp-imdb-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%9E%90%EC%97%B0%EC%96%B4-%EC%B2%98%EB%A6%AC/

scalar : ���� �ϳ�

���� = get_df(������������)
����.shape
����.head()
����.info()
����.describe() -> unique : ���� ��, top : �ֺ�, freq : �ֺ� �󵵼�
df_titanic['Class'].value_counts() : ������ value�� �� �� �ִ���

#������ Ÿ���� int�� �����ϸ� ��ġ�� ������. count, mean, std, min/max, ��������� �����ش�.
df_king['life'] = df_king['life'].astype(int)
df_king['period'] = df_king['period'].astype(int)
df_king.describe()

# ����ġ�� ���� ���� �� �ΰ��� ���� ����.
df_king.isnull().sum()
df_king.sum()

# ���� ���� ������ �ռ����� ������ ���� ���� 5���� �����͸� ����.
df_king.sort_values(by='period', ascending=False).head(5)

# ���, ǥ�� ����
df_king.mean()
df_king.std()
df_king.max()

df_king['life'].plot()
df_king['life'].hist()

#� Į���� �ִ��� ������
df_titanic.columns

#����&�ܰ� �������� ���� describe�ϱ�
house.groupby('����&�ܰ�').describe()

