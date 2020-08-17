# <img src="https://raw.githubusercontent.com/ChugunovRoman/figma-linux/master/resources/icons/128x128.png" width="32"> Figma electron app (unofficial)

Figma-linux it's unofficial desktop application for Linux for the [Figma web application](https://figma.com). <br>
This app based on the [Electron](http://electron.atom.io)

<p>
	<img src="https://raw.githubusercontent.com/ChugunovRoman/figma-linux/master/images/screenshot1.png">
</p>

<p>
	<img src="https://img.shields.io/github/downloads/ChugunovRoman/figma-linux/total.svg" />
    <a href="https://github.com/ChugunovRoman/figma-linux/releases/latest">
        <img src="https://img.shields.io/github/release/ChugunovRoman/figma-linux.svg?label=latest%20release">
	</a>
	<img src="https://img.shields.io/github/last-commit/ChugunovRoman/figma-linux.svg">
    <a href="https://github.com/ChugunovRoman/figma-linux/issues">
        <img src="https://img.shields.io/github/issues/ChugunovRoman/figma-linux.svg">
	</a>
    <a href="https://github.com/ChugunovRoman/figma-linux/issues?q=is%3Aissue+is%3Aclosed">
        <img src="https://img.shields.io/github/issues-closed/ChugunovRoman/figma-linux.svg">
	</a>
	<img src="https://img.shields.io/github/languages/code-size/ChugunovRoman/figma-linux.svg">
	<img src="https://img.shields.io/github/repo-size/ChugunovRoman/figma-linux.svg">
    <a href="https://github.com/ChugunovRoman/figma-linux/stargazers">
		<img src="https://img.shields.io/github/stars/ChugunovRoman/figma-linux.svg?style=social&label=Stars">
	</a>
</p>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d80ff1e7c3fe4da28e2e50a28d4ead7c)](https://www.codacy.com/manual/ChugunovRoman/figma-linux?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ChugunovRoman/figma-linux&amp;utm_campaign=Badge_Grade)
[![figma-linux](https://snapcraft.io/figma-linux/badge.svg)](https://snapcraft.io/figma-linux)
[![Snap Status](https://build.snapcraft.io/badge/ChugunovRoman/figma-linux.svg)](https://build.snapcraft.io/user/ChugunovRoman/figma-linux)

<p>
	<span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/U5hnMuASy" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
	<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4DNBUKPV6FBCY&source=url" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
</p>

## Dependences
On Debian-based distros You need install the libgconf-2-4 library


## Repositories

### Ubuntu

For now, there are have repository for [deb package on Launchpad](https://launchpad.net/~chrdevs/+archive/ubuntu/figma). <br>
To add repository, execute command below:
```bash
sudo add-apt-repository ppa:chrdevs/figma
```
Then update your packages:
```bash
sudo apt update
```
If you receive a **NO_PUBKEY** error while running **apt update**, then you must add the key manualy:
```bash
sudo apt-key adv --recv-key --keyserver keyserver.ubuntu.com 70F3445E637983CC
```
And then install:
```bash
sudo apt install figma-linux -y
```

Or Beta deb package:
```bash
sudo apt install figma-linux-beta -y
```

## Arch Linux

There is a [figma-linux](https://aur.archlinux.org/packages/figma-linux/) package available in the AUR
```bash
yay -S figma-linux
```

## Install


[Download](https://github.com/ChugunovRoman/figma-linux/releases) app package for You linux distribution. <br>
For debian-based linux distributions:
```
sudo dpkg -i figma-linux_0.5.7_amd64.deb
```

With [snap package](https://snapcraft.io/figma-linux):
```bash
sudo snap install figma-linux
```
Or Beta release:
```bash
sudo snap install --channel=beta figma-linux
```

For RedHat-based linux distributions:
```
sudo yum install figma-linux-0.5.7.x86_64.rpm
```
or
```
sudo rpm -Uvh figma-linux-0.5.7.x86_64.rpm
```
or
```
sudo zypper install figma-linux-0.5.7.x86_64.rpm
```
or
```
sudo smart install figma-linux-0.5.7.x86_64.rpm
```

## AppImage
For normal work of the app via AppImage, you need install it via command:
```bash
sudo ./figma-linux-0.6.1.AppImage -i
```

It installs the desktop file, icons and creates symbolic link to the AppImage file.
After that, you can run app via the icon or command:
```
figma-linux
```

For display rest flags for AppImage:
```
./figma-linux-0.6.1.AppImage -h
```

## Run

```
figma-linux
```

## Development

Steps to start development:

1.  git clone git@github.com:ChugunovRoman/figma-linux.git
2.  cd figma-linux
3.  install Rust via [rustup](https://rustup.rs/)
4.  npm i

To start the app in dev mode:
```
npm run dev
```

To start the app in production mode:
```
npm run build; npm start
```

ATTENTION:
When You do changes in middleware component, You need to rebuild and restart the app each time.
Because the middleware execute only on run the app. Hot Reload doesn't work here.

## description of  npm scripts

 * **dev** - runs app in dev mode
 * **start** - runs already built app
 * **build** - only builds app from src
 * **builder** - packs the app into different linux packages (see ./config/builder.json)
 * **pack** - removes old packages from the installers dir, build the app and pack it

## Community

Join us in [telegram](https://t.me/figma_linux) and [spectrum.chat](https://spectrum.chat/figma-linux)


## Become a Backer

If you like to contribute by funding for sustaining our work, you can to do this via PayPal or Buy me a Coffee:

<p>
	<span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/U5hnMuASy" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
	<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4DNBUKPV6FBCY&source=url" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
</p>

Thanks sponsors.
