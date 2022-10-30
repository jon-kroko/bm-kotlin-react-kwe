import kotlin.js.JsExport
import kotlin.js.JsName

fun String.isInt(): Boolean {
    toIntOrNull()?.let { return true } ?: return false
}

fun validateSyntax(tokens: List<String>): Boolean {
    if (tokens.size != 5) return false
    if (!tokens[0].isInt()) return false
    if (tokens[1] != "+") return false
    if (!tokens[2].isInt()) return false
    if (tokens[3] != "=") return false
    if (!tokens[4].isInt()) return false
    return true
}

@JsExport()
@JsName("validateEquation")
fun validate(equationString: String): String {
    if (equationString.isEmpty()) return "no input"

    val tokens: List<String> = equationString.split(" ")

    if (!validateSyntax(tokens)) return "syntax error"

    val firstOperand = tokens[0].toInt()
    val secondOperand = tokens[2].toInt()
    val result = tokens[4].toInt()

    return if (firstOperand + secondOperand == result) "valid" else "invalid"
}