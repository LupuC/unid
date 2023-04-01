export const unid = {
  generate1(): string {
    const now = new Date().getTime();
    const epoch = new Date(1582, 9, 15).getTime();
    const ticks = (now - epoch) * 10000;
    const nodeId = 92759;
    const clockSeq = Math.floor(Math.random() * 16384); // random 14-bit sequence number
    const unid = [
      (ticks & 0xffffffff).toString(16).padStart(8, '0'),
      ((ticks >> 32) & 0xffff).toString(16).padStart(4, '0'),
      ((ticks >> 48) & 0x0fff | 0x1000).toString(16).padStart(4, '0'),
      (nodeId & 0xffff).toString(16).padStart(4, '0'),
      ((nodeId >> 16) & 0xff | 0x80).toString(16).padStart(2, '0'),
      (clockSeq & 0x3fff | 0x8000).toString(16).padStart(4, '0')
    ].join('-');
    return unid;
  },
  
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

  check(uuidString: string): boolean {
    try {
      const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
      return uuidPattern.test(uuidString);
    } catch (err) {
      console.error(`Error validating UUID: ${err}`);
      return false;
    }
  }
};