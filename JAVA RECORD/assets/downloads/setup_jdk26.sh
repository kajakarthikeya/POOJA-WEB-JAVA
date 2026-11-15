#!/bin/bash
# Week 2: OpenJDK & Oracle JDK SE 26 Installation Script
# Student: Venkata Sai Karthikeya Kaja (24EU08161)
set -e

echo 'Step 1: Extracting JDK tarball to /opt/'
sudo tar -xvf ~/Downloads/openjdk-26*_bin.tar.gz -C /opt/

echo 'Step 2: Registering Java binaries with update-alternatives'
sudo update-alternatives --install /usr/bin/java java /opt/jdk-26/bin/java 1
sudo update-alternatives --install /usr/bin/javac javac /opt/jdk-26/bin/javac 1

echo 'Step 3: Setting environment variables in ~/.bashrc'
echo 'export JAVA_HOME=/opt/jdk-26' >> ~/.bashrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

echo 'Step 4: Verifying Java version'
java --version
javac --version
echo 'Installation and Configuration Complete!'
