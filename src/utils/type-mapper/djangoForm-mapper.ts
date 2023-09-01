enum TypeScriptTypes {
  string = "text",
  email = "email",
  password = "password",
  number = "number",
  boolean = "boolean",
  date = "date",
  datetime = "datetime-local",
  time = "time",
  select = "select",
}

const DjangoToTypeScript: Record<string, TypeScriptTypes> = {
  CharField: TypeScriptTypes.string,
  EmailField: TypeScriptTypes.email,
  BooleanField: TypeScriptTypes.boolean,
  DateField: TypeScriptTypes.date,
  DateTimeField: TypeScriptTypes.datetime,
  TimeField: TypeScriptTypes.time,
  ChoiceField: TypeScriptTypes.select,
  DecimalField: TypeScriptTypes.number,
  FloatField: TypeScriptTypes.number,
  IntegerField: TypeScriptTypes.number,
  ImageField: TypeScriptTypes.string,
  JSONField: TypeScriptTypes.string,
  SlugField: TypeScriptTypes.string,
  TextField: TypeScriptTypes.string,
  TypedChoiceField: TypeScriptTypes.select,
  URLField: TypeScriptTypes.string,
  UUIDField: TypeScriptTypes.string,
};

const typeMapper = (type: string): TypeScriptTypes => {
  return DjangoToTypeScript[type] || TypeScriptTypes.string;
};

export default typeMapper;
