```
<VerticalSpacer>
    <div>
        <button>1</button>
    </div>
    <div>
        <button>2</button>
    </div>
    <div>
        <button>3</button>
    </div>
</VerticalSpacer>
```

```
<VerticalSpacer spacing={15}>
    <div>
        <button>1</button>
    </div>
    <div>
        <button>2</button>
    </div>
    <div>
        <button>3</button>
    </div>
</VerticalSpacer>
```

Também é possível determinar o espaçamento de acordo com o breakpoint.

```
<VerticalSpacer
    spacing={{
        default: 100,
        large: 40,
        small: 15,
        xsmall: 5
    }}
>
    <div>
        <button>1</button>
    </div>
    <div>
        <button>2</button>
    </div>
    <div>
        <button>3</button>
    </div>
</VerticalSpacer>
```
