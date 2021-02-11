import sizeof from 'object-sizeof'

const Helpers = {
  dataToBytes(data: any): number {
    return sizeof(data)
  }
}

export default Helpers
