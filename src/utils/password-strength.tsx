export function checkPasswordStrength(password: string | undefined): number {

  let strength = 0;
  const regex = {
    digit: /\d/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    symbol: /[\W_]/,
    };
    if(!password) return 0

  if (password.length >= 10) {
    strength += 1;
  }

  if (regex.digit.test(password)) {
    strength += 1;
  }

  if (regex.lowercase.test(password)) {
    strength += 1;
  }

  if (regex.uppercase.test(password)) {
    strength += 1;
  }

  if (regex.symbol.test(password)) {
    strength += 1;
    }
    
    return strength;

    
    
    
}

export function getPasswordStrengthColor(strength: number): string {
  switch (strength) {
    case 0:
      return 'red';
    case 1:
      return 'orange';
    case 2:
      return 'yellow';
    case 3:
      return 'lightgreen';
    case 4:
          return 'green';
      case 5:
            return 'green';
    default:
      return 'red';
  }
}

export function getPasswordStrengthText(strength: number): string {
    switch (strength) {
        case 0:
            return 'Very weak';
        case 1:
            return 'Weak';
        case 2:
            return 'Fair';
        case 3:
            return 'Good';
        case 4:
            return 'Strong';
        case 5:
            return 'Excellent';
        default:
            return '';
    }
}