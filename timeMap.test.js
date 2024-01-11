const TimeMap = require('./TimeMap'); // adjust this if your class is in another file

test('Example: TimeMap operations', () => {
  const timeMap = new TimeMap();
  timeMap.set("foo", "bar", 1);
  expect(timeMap.get("foo", 1)).toBe("bar");
  expect(timeMap.get("foo", 3)).toBe("bar");
  timeMap.set("foo", "bar2", 4);
  expect(timeMap.get("foo", 4)).toBe("bar2");
  expect(timeMap.get("foo", 5)).toBe("bar2");
});

test('Extra Test 1: TimeMap operations with multiple keys', () => {
  const timeMap = new TimeMap();
  timeMap.set("foo", "bar", 1);
  timeMap.set("baz", "qux", 2);
  expect(timeMap.get("foo", 1)).toBe("bar");
  expect(timeMap.get("baz", 2)).toBe("qux");
  expect(timeMap.get("foo", 3)).toBe("bar");
  expect(timeMap.get("baz", 3)).toBe("qux");
});

test('Extra Test 2: TimeMap operations with no existing timestamp', () => {
  const timeMap = new TimeMap();
  timeMap.set("foo", "bar", 1);
  expect(timeMap.get("foo", 0)).toBe("");
});