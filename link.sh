#!/bin/bash
cd dist
find . -maxdepth 1 -type d  ! -path . -exec ln -s {} $HOME/.factorio/mods/{} \;
