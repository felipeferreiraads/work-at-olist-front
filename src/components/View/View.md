```
<View>
    I'm a div
</View>
```

```
<View component='a' href='#'>
    I'm a link
</View>
```

```
const CustomComponent = props =>
    <div
        style={{ color: 'red', fontWeight: 'bold' }}
        {...props}
    />

;<View component={CustomComponent}>
    I'm a custom component
</View>
```
