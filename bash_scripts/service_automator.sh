# installs docker and starts my service
sudo apt update

yes | sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

sudo apt update

apt-cache policy docker-ce

yes | sudo apt install docker-ce

sudo usermod -aG docker ${USER}

sudo docker pull redbeans89/sdc_reviews

sudo docker run -d -p 3000:3000 --name reviews redbeans89/sdc_reviews

sudo docker ps