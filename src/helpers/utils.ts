export const normalizeText = (text: string) : string => {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const flatErrors = (errors: {[key: string]: string}): string => {
  let response = ""

  for (let key in errors) {
    response += `${key}: ${errors[key]} \n`
  }

  return response
}
