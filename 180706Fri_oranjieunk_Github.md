commit ������ �� push

clear # ȭ�� �ʱ�ȭ

ls -al
git commit --amend
w ����, q ������

git status #���º���

git remote add origin �ּ�
git remote -v #���� Ȯ��
vi .git/config
wq:

git push -u origin master #u : upstream

git������ vi�� �����ϴ� �� ����
notepad������ ��ġ���� ���ڰ� �ٰų� ���ڰ� �����⵵ ��

git def�� �������� �� �� ����

cd C:\\Dataitgirls

�ֽ� ���·� �����ϱ�
git fetch
git merge
git pull # git fetch + merge
git pull --rebase

git remote add upstream �ּ�
git pull --rebase upstream maser # �츮 ������ �ִ� ����ҷ� ���հ��� ������� ������ ������ ��ɾ�

* git branch -m {���� Branch �̸�} {���ο� Branch �̸�}��
* git branch -d {������ Branch �̸�}

cd ������ : �������� �̵�
cd .. : �������� �̵�

���� ����ҿ� ����ȭ : git clone �ּ�

���� �̵��ϱ� : mv -rf ����������� �ű��������

<fork�� ������Ʈ �ǽ�>
git clone git@github.com:oranjieunk/tutorial.git
git remote add upstream git@github.com:dataitgirls2/tutorial.git
git remote set-url upstream git@github.com:dataitgirls2/tutorial.git
git pull --rebase upstream master

rebase : upstream �ּ��� ������ ���÷� ������

<���ÿ� ���� ���� �����, commit�ϱ�>
vi "README.md"
git add "180703Tue_oranjieunk.md"
git mv "180703Tue_oranjieunk.md" "180703Tue_oranjieunk.md"
git commit -m "���� ���� �ٲٱ�"
git push -u origin

https://www.slideshare.net/combineads/2018-4-next-104272149
��� ���� ���� �м� ȯ��� NEXT

http://smalldataguru.com/%EB%AF%B8%EA%B5%AD-%EC%9D%B8%ED%84%B4%EC%89%BD%EC%97%90%EC%84%9C-%EB%B0%B0%EC%9A%B4-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AC%EC%9D%B4%EC%96%B8%ED%8B%B0%EC%8A%A4%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0/
�̱� ���Ͻ����� ��� ������ ���̾�Ƽ��Ʈ

���� ��α� : ����, ������ũ��Ʈ�� �ִ� �� 