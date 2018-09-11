1) source myvenv/Scripts/activate
으로 가상환경 오픈하기
2) python3 -> python
로 바꾸어서 실행하기

Q. 가상환경은 왜 만드나요?
pipenv, venv, virtualenv(옛날엔 많이 썼는데 요즘은 venv로 많이 밀고 있음), pyenv
python 3.7를 설치하면 여러 프로젝트를 하고, A 프로젝트에서 numpy를 설치하고 B 프로젝트를 django를 설치하는데 파이썬 관련 환경을 쪼개기 위해 사용.
장고걸스 실습용 venv를 만든 것임. conda도 비슷한 기능들을 함.
dactivate로 가상환경 빠져나옴

python3 -m pip install --upgrade pip
- pip 자체를 가상환경에 설치하는 명령어
pip freeze
- 설치된 항목 나옴
pip install django~=1.11.0
- 특정 버전을 설치하기 위해 사용

Q. 가상환경은 기본적으로 뭐가 설치되어 있는가?
pip, 파이썬 표준 라이브러리가 기본으로 설치됨

http는 정보를 가로챌 수 있는 사이트. https여야 함.

runserver 명령어는 개발용 테스트 서버를 굴리는 것.
속도는 느리고, 혼자서 밖에 접속을 못함.

Apache, Nginx(해킹 막아주고 성능 빠르게 도와줌)가 WSGI를 통해 장고를 실행하는 것! 

장고 웹서버 실행하기
python manage.py runserver

winpty python manage.py createsuperuser
장고 웹서버 종료하기
deactivate

ORM(Object Relation mapping)을 미리 씨드값을 지정해놓으면 과거보다 훨씬 관리가 편해짐. save를 호출할 때만 ORM 실행

* 콘웨이의 법칙 : 조직의 소통 방식과 조직의 결과물이 닮아있다!

Django에서 템플릿을 써서 레이아웃을 뻥 뚫어넣고 채우는 원리라고 보면 됨.