import DataLoader from 'dataloader';

export const getDataLoader = (context, info, batchLoadFn) => {
  const { dataLoaders } = context
  let currentDataLoader = dataLoaders.get(info.fieldNodes)
  if (!dataLoaders.get(info.fieldNodes)) {
    currentDataLoader = new DataLoader(batchLoadFn)
    dataLoaders.set(info.fieldNodes, currentDataLoader);
  }
  return currentDataLoader
}