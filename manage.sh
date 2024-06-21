#!/bin/bash

root_dir="$(dirname -- ${BASH_SOURCE[0]})/src"

snake_to_camel_case() {
  local input=$1

  local output=""
  local capitalize_next=false
  local first_char=true

  # Iterate through each character in the input string
  for (( i=0; i<${#input}; i++ )); do
    char=${input:i:1}

    if [[ $char == "_" ]]; then
      capitalize_next=true
    else
      if [[ $capitalize_next == true || $first_char == true ]]; then
        output+=$(echo $char | tr '[:lower:]' '[:upper:]')
        capitalize_next=false
        first_char=false
      else
        output+=$char
      fi
    fi
  done

  echo $output
}

create_app(){
  if [[ -z $1 ]]; then
    echo "Provide an app name"
    exit 1
  fi

  app_name=$(snake_to_camel_case $1)

  if [[ -d $root_dir/$app_name ]]; then
    echo "There is already an app with that name"
    exit 1
  fi

  echo "Creating app $app_name"

  structure_dir=./$root_dir/structure
  app_dir=./$root_dir/$app_name

  cp -r $structure_dir $app_dir

  find $app_dir -type f -print0 | while IFS= read -r -d $'\0' file; do 
    sed -i "s/app_name/$app_name/g" $file
    sed -i "s/appName/$app_name/g" $file
    sed -i "s/AppName/$app_name/g" $file 

    if [[ $file =~ "app_name" ]]; then
      mv $file ${file/app_name/$app_name}
    fi
  done
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -a| --create-app)
      create_app $2
      shift
    ;;
    -c| --create-component)
      echo "component $2"
      shift
    ;;
    -h| --help)
      echo "
        -a | --create-app <name> creates a new app structure with the specified name
        -c | --create-component <name> creates a new component structure in cwd
      "
      shift
    ;;
    *)
      break
    ;;
  esac
done
