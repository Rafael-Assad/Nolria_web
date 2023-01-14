import { HashItem } from './../../types/index.d';

export const getIllustrationTypesObj = (hashList: string[]) => {
  let ilustrationTypes: HashItem[] = [ { id: 1, title:'ALL', hash: '#all' }]

  for(let index in hashList){
    const hash = hashList[index]
    const typeItem = { 
      id: parseInt(index) + 2, 
      title: hash.replace('#', '').toUpperCase(),
      hash: hash 
    }

    ilustrationTypes.push(typeItem)
  }

  return ilustrationTypes
}