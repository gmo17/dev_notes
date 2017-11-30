#OH-MY-ZSH SUMMARY
Oh-My-Zsh (zsh)?
Oh-My-Zsh is a command line tool aiming to assist developers in tailoring the command line to make it more
 intuitive and helpful in the development process.
The framework is an open source, community-driven, it comes with a serie of helpful functions, helpers, plugins and themes.

INSTALLATION
Information on how to install 0h-my-zsh can be obtained either:
- By visiting http://ohmyz.sh under "Install 0h-my-zsh now"
- By visiting https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH

Once installed a dot file (.zshrc) will be created and saved in the home directory.
To visualise it:
- Change directory (cd) to the home directory as below.
	$ cd ~

- Then run the following line
	$ open .zshrc
This will open up in the default text editor (IDE).

- To open it in a specific IDE
$ myIDE .zshrc

The .zshrc files contains:
- Settings needed to get the shell running correctly.
- Commented lines of codes which can be Uncommented as required.
- The path to where the zsh has been installation "export ZSH=/****/*****/.oh-my-zsh"
- The zsh_theme variable.

THEMES
The theme sections is where the terminal's look and feel can be change to satisfy
the user needs.
A list of themes are available on https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
The installed zsh also includes a directory containing an up to date list of all themes, accessible by these steps.
$ cd ~
$ open .oh-my-zsh/

The theme can be changed by simply changing the ZSH_THEME's constant variable (ZSH_THEME="aTheme")

ZSH_THEME can be set to "random", this will result is a new theme being used whenever a
new terminal window is opened. Alternatively for testing purpose the line below can be run
successively to try various styles.
$ source ~/.zshrc

Some themes may display unreadable characters, to patch this simply download "power line fonts"
from github https://github.com/powerline/fonts
