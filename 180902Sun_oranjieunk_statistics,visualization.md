1) p-value의 정의 : 귀무가설이 참이라고 가정할 때 극단적인 통계량이 실제로 관측될 확률
유의수준이 낮을수록 반박하기가 쉬워짐. 유의수준이 높다는 것은 훨씬 까다롭게 검증하겠다는 의미

2) 시각화
(ggplot(child)
+ aes(x='category', y='votes')
+ geom_col(fill='skyblue')
+ ggtitle('카테고리별 투표수')
+ coord_flip() # x,y축 바꾸기
+ theme(text=element_text(family='NanumBarunGothic'))
)

차트의 종류
geom_col(fill='skyblue')
geom_point()
geom_bar(fill='skyblue')
geom_boxplot()
geom_histogram(binwidth=10)

여러가지 옵션
facet_wrap('~Survived') # 해당 카테고리별로 보기
stat_smooth()

결측치 처리(Simple)
방법 1)
train['Age'] = train['Age'].dropna()
방법 2)
train['Survived'] = train['Survived'].astype('category')
train['Age'] = train['Age'].fillna(train['Age'].median())
train['Embarked'] = train['Embarked'].fillna(train['Embarked'].mode()[0])

3) 탄자니아 오픈채팅방 프로젝트 전처리