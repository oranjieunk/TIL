ls *.pem
mkdir ~/.ssh
# pem을 ssh에 넣어라!
mv daitgirls.pem ~/.ssh/
#윈도우는 \이고, 다른 곳은 /으로 구분
# 나만 읽고 다른 애들은 못하게! 다른 로그온 사용자가 로그인해서 파일 내용을 들여다 볼 수 없도록!(공용 폴더에 있으면 들어갈 수 있음)
chmod 600 ~/.ssh/daitgirls.pem


우분투로 들어가기
단계6 보안그룹
SSH
TCP 22
키페어 : daitgirls 다운로드
탄력적 IP : 새 주소 할당 -> 주소 연결해서 인스턴스와 IP 선택

# 접속
ssh -i ~/.ssh/daitgirls2.pem ubuntu@18.221.181.67

검색 : ubuntu ssh git generator
ssh-keygen -t rsa -b 4096 -C "jieun.kim0413@gmail.com"
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
# identity added까지 한 거면 성공!
# cat 명령은 파일의 내용을 화면에 출력
cat ~/.ssh/id_rsa.pub
# 나오는 것들을 github에 repository Deploy keys에서 Add deploy key 등록

nano run.sh
ls
# 남은 읽거나 실행할 수 있음
chmod 755 run.sh

# 우분투 실행한 후
git clone 레파지토리
cd
ls
ls -als

nano run.sh
$ cd home/ubuntu/projects/rand_num_generator
$ python prng.py >> data.txt
# >면 덮어쓰기, >> 는 이어주기
ctrl+x 저장

./run.sh
# 아무것도 안 나오면 좋은 것! 들어가짐
cat data.txt

git add data.txt
git commit -m "Update data"
git push
cronetab -e
wc -l data.txt

minute, hour, day of month, day of week
/home/ubuntu/projects/rand_num_generator/run.sh

ctrl+x 눌러서 저장
