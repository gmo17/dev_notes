
Oh-My-Zsh?
Oh-My-Zsh allows developers to tailor the command line in order to make it more
intuitive and helpful in the development process.
is an open source, community-driven framework for managing your ZSH
configuration. It comes bundled with a ton of helpful functions, helpers, plugins,
themes, and a few things that make you shout..

INSTALLATION
Information on how to install 0h-my-zsh can be obtained either:
- By visiting http://ohmyz.sh under "Install 0h-my-zsh now"
- By visiting https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH

Once the installed a dot file (.zshrc) will be created and saved in the home directory.
To open and visualise it, change directory (cd) to the home directory as below.
$ cd ~

then run the folling line
$ open .zshrc
This will open up in the default text editor (IDE).

To open it in a specific IDE
$ myIDE .zshrc

The .zshrc files contains:
- Settings needed to get the shell running correctly.
- Commented lines of codes which can be Uncommented as required.
- The path to your oh-my-zsh installation "export ZSH=/****/*****/.oh-my-zsh"
- The zsh_theme variable.

THEMES
The theme sections is where the terminal's look and feel can be change to satisfy
the user needs.
A list of themes are available on https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
In the installation a directory containing an up to date list of all themes is also included.
The them directory can be access by following these steps
$ cd ~
$ open .oh-my-zsh/
This contains among others a theme directory containing all current themes.

The theme can be changed by simply changing the ZSH_THEME's constant variable (ZSH_THEME="aTheme")

ZSH_THEME can be set to "random", this will result is a new theme being used whenever a
new terminal window is opened. Alternatively for testing purpose the line below can be run
successively to try various styles.
$ source ~/.zshrc

Some themes may display unreadable characters, to patch this simply download "power line fonts"
from github https://github.com/powerline/fonts
