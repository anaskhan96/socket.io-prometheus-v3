const Helpers = {
  dataToBytes(data: any): number {
    try {
      return new TextEncoder().encode(JSON.stringify(data)).length
    } catch (err) {
      return 0
    }
  }
}

export default Helpers
