export default (mt: RegExpMatchArray): mt is RegExpMatchArray & { index: number } => typeof mt.index == 'number'
