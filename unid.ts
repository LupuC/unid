import * as crypto from 'crypto';

export const unid = {
  generate4(): string {
    let d = new Date().getTime();
    if (isNaN(d)) {
      throw new Error('Invalid Date object');
    }
    const unid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return unid;
  },
  
  generateUUID5(namespace: string, name: string): string {
    const nsBuffer = Buffer.from(namespace.replace(/-/g, ''), 'hex');
    const nameBuffer = Buffer.from(name, 'utf8');
    const hash = crypto.createHash('sha1');
    hash.update(nsBuffer);
    hash.update(nameBuffer);
    const bytes = hash.digest();
  
    bytes[6] = (bytes[6] & 0x0f) | 0x50;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
  
    const hex = bytes.toString('hex');
    const uuid5 = `${hex.substr(0, 8)}-${hex.substr(8, 4)}-5${hex.substr(13, 3)}-${hex.substr(16, 4)}-${hex.substr(20, 12)}`;
    return uuid5;
  },
  

  check(uuidString: string): boolean {
    try {
      const uuid4Pattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
      const uuid5Pattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-5[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
      return uuid4Pattern.test(uuidString) || uuid5Pattern.test(uuidString);
    } catch (err) {
      console.error(`Error validating UUID: ${err}`);
      return false;
    }
  },
  
};