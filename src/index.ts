export const processAudio = function (a: Float32Array): Int16Array {
  for (var b = a.length, d = new Int16Array(b); b--; )
    d[b] = 32767 * Math.min(1, a[b]);

  return d;
};

export default processAudio;
